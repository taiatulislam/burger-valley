import PropTypes from "prop-types";

const SectionTitle = ({ title, description, barWidth }) => {
  return (
    <div className="max-w-md mx-auto text-center">
      <h2 className="text-3xl font-semibold uppercase">{title}</h2>
      <hr
        className={`border-yellow-400 w-[${barWidth}px] border-2 mx-auto my-5`}
      />
      <p>{description}</p>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  barWidth: PropTypes.number,
};

export default SectionTitle;
