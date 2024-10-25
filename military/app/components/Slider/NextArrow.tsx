import ChevronRight from '../Icons/ChevronRight';

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className={'arrowRight'} onClick={onClick}>
      <div className={'arrowRight'} onClick={onClick}>
        <ChevronRight />
      </div>
    </div>
  );
};

export default NextArrow;
