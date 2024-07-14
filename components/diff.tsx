import * as diff from "diff";
import PropTypes from "prop-types";

const styles = {
  added: {
    color: "green",
    backgroundColor: "#a7f3d0",
    padding: "0 2px 0 2px",
    margin: "0 2px 0 2px",
  },
  removed: {
    color: "red",
    backgroundColor: "#fecdd3",
    textDecoration: "line-through",
    padding: "0 2px 0 2px",
    margin: "0 2px 0 2px",
  },
};

const Diff = ({ string1 = "", string2 = "", mode = "characters" }) => {
  let groups = diff.diffWords(string1, string2);

  const mappedNodes = groups.map((group, idx) => {
    const { value, added, removed } = group;
    let nodeStyles;
    if (added) nodeStyles = styles.added;
    if (removed) nodeStyles = styles.removed;
    return (
      <span key={idx} style={nodeStyles}>
        {value}
      </span>
    );
  });

  return <span>{mappedNodes}</span>;
};

Diff.propTypes = {
  string1: PropTypes.string,
  string2: PropTypes.string,
  mode: PropTypes.oneOf(["characters", "words"]),
};

export default Diff;
