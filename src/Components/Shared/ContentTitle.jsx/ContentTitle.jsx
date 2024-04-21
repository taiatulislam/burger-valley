import PropTypes from "prop-types";

const ContentTitle = ({ title, description, barWidth }) => {
  return (
    <div className="">
      <h2 className="text-3xl font-semibold uppercase">{title}</h2>
      <hr className={`border-yellow-400 w-[${barWidth}px] border-2 my-5`} />
      <p>{description}</p>
    </div>
  );
};

ContentTitle.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  barWidth: PropTypes.number,
};

export default ContentTitle;
