import { createClient } from 'next-sanity';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config({ path: '.env.local' });

const clientConfig = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: '2024-08-18',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
};

type flight1Instructor = {
  email: string;
  firstName: string;
  lastName: string;
  instructorProfile: {
    title: string;
    numberOfJumps: number;
    profileImage: string;
  };
};

// API endpoint
const API_ENDPOINT = 'https://api.flight-1.com/instructors';
const instructorEmails = [
  'ianbobo+instructor@gmail.com',
  'jc@flight-1.com',
  'tommy@flight-1.com',
  'cam@flight-1.com',
  'martin@flight-1.com',
  'travis@flight-1.com',
  'jay@flight-1.com',
  'shannon@flight-1.com',
  'jay@flight-1.com',
  'brian@flight-1.com',
  'stu@flight-1.com',
  'pete@flight-1.com',
  'marco@flight-1.com',
  'jim@flight-1.com',
  'pablete@skydivelillo.com',
  'ben@flight-1.com',
  'john@flight-1.com',
  'pbpangburn@gmail.com',
  'justinp@flight-1.com',
  'kaz@flight-1.com',
  'aaron@flight-1.com',
  'justin@flight-1.com',
  'jimmy@flight-1.com',
  'wez@flight-1.com',
];

async function fetchInstructorsAndSave(): Promise<void> {
  let allInstructors: { email: string; firstName: string; lastName: string }[] =
    [];
  let page = 1;
  const limit = 10;

  try {
    while (true) {
      const response = await fetch(
        `${API_ENDPOINT}?page=${page}&limit=${limit}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const instructors = data.data.map((instructor: flight1Instructor) => ({
        email: instructor.email,
        firstName: instructor.firstName,
        lastName: instructor.lastName,
      }));

      allInstructors = allInstructors.concat(instructors);

      const totalPages = Math.ceil(data.totalCount / limit);
      if (page >= totalPages) {
        break;
      }

      page++;
    }

    // Save to a JSON file
    fs.writeFileSync(
      'instructors.json',
      JSON.stringify(allInstructors, null, 2)
    );
    console.log(
      `Saved ${allInstructors.length} instructors to instructors.json`
    );
  } catch (error) {
    console.error('Error fetching instructors:', error);
  }
}

async function fetchInstructors(): Promise<flight1Instructor[]> {
  let allInstructors: flight1Instructor[] = [];
  let page = 1;
  const limit = 10;

  try {
    while (true) {
      const response = await fetch(
        `${API_ENDPOINT}?page=${page}&limit=${limit}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const instructors: flight1Instructor[] = data.data;

      // Filter to only include instructors in the provided email list
      const filteredInstructors = instructors.filter((instructor) =>
        instructorEmails.includes(instructor.email)
      );

      allInstructors = allInstructors.concat(filteredInstructors);

      const totalPages = Math.ceil(data.totalCount / limit);
      if (page >= totalPages) {
        break;
      }

      page++;
    }

    console.log(`Total instructors fetched: ${allInstructors.length}`);
    return allInstructors;
  } catch (error) {
    console.error('Error fetching instructors:', error);
    return [];
  }
}

async function downloadAndUploadImage(
  profileImageHash: string
): Promise<string | null> {
  const imageUrl = `https://flight-1.com/uploads/instructor/profile/${profileImageHash}`;

  try {
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to download image: ${response.status}`);
    }

    const arrayBuffer = await response.arrayBuffer();
    const imageBuffer = Buffer.from(arrayBuffer);

    const asset = await createClient(clientConfig).assets.upload(
      'image',
      imageBuffer,
      {
        filename: `${profileImageHash}.jpg`, // Or extract the actual file extension if needed
      }
    );

    return asset._id; // This is the reference you’ll use in the Sanity document
  } catch (error) {
    console.error('Error downloading or uploading image:', error);
    return null;
  }
}

async function migrateInstructor(instructor: flight1Instructor) {
  try {
    // Check if the instructor already exists
    const existingDocument = await createClient(clientConfig).fetch(
      `*[_type == "instructor" && email == $email][0]`,
      {
        email: instructor.email,
      }
    );
    if (existingDocument) {
      // do nothing
      console.log(`Instructor already exists: ${instructor.email}`);
      return;
    }
    let profileImageId = null;
    if (instructor.instructorProfile.profileImage) {
      profileImageId = await downloadAndUploadImage(
        instructor.instructorProfile.profileImage
      );
    }

    const instructorData = {
      _type: 'instructor',
      email: instructor.email,
      firstName: instructor.firstName,
      lastName: instructor.lastName,
      title: instructor.instructorProfile?.title,
      numberOfJumps: instructor.instructorProfile?.numberOfJumps,
      profileImage: instructor.instructorProfile.profileImage
        ? {
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: profileImageId,
            },
          }
        : null,
      yearsInSport: null,
      yearsWithFlight1: null,
    };
    await createClient(clientConfig).create({
      ...instructorData,
    });
    console.log(`Created instructor: ${instructor.email}`);
  } catch (error) {
    console.error(`Failed to migrate instructor ${instructor.email}:`, error);
  }
}

async function migrateAllInstructors() {
  const instructors = await fetchInstructors();

  for (const instructor of instructors) {
    await migrateInstructor(instructor);
  }

  console.log('Migration completed.');
}

async function testCreateDocument() {
  try {
    const result = await createClient(clientConfig).create({
      _type: 'instructor',
      email: 'test@example.com',
      firstName: 'Test',
      lastName: 'User',
    });
    console.log('Document created:', result);
  } catch (error) {
    console.error('Error creating document:', error);
  }
}

//testCreateDocument();
//fetchInstructorsAndSave();
// Run the migration
migrateAllInstructors();
