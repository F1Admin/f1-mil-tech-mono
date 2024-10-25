import ChevronLeft from '../Icons/ChevronLeft';

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className={'arrowLeft'} onClick={onClick}>
      <div className={'arrowLeft'} onClick={onClick}>
        <ChevronLeft />
      </div>
    </div>
  );
};

export default PrevArrow;
