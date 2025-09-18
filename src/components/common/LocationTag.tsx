
type Props = {
    name: string
};

const LocationTag = ({...props}: Props) => {
  return (
    <>
      <span className="bg-success-50 w-fit h-[28px] py-2 px-5 rounded-[40px] text-center leading-3 font-medium text-xs text-success-700">
        {props.name}
      </span>
    </>
  );
};

export default LocationTag;
