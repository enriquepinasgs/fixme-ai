"use client";
import * as diff from "diff";
import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";
import { Downlight } from "./downlight";
import { Highlight } from "./highlight";

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

const Diff = ({ string1 = "", string2 = "", showErrors = true }) => {
  let groups = diff.diffWords(string1, string2);

  const mappedNodes = groups.map((group, idx) => {
    const { value, added, removed } = group;
    let nodeStyles;
    if (added)
      return (
        <AnimatePresence key={idx}>
          {showErrors ? (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Highlight>{value}</Highlight>
            </motion.span>
          ) : (
            <span>{value}</span>
          )}
        </AnimatePresence>
      );
    if (removed)
      return (
        <AnimatePresence key={idx}>
          {showErrors && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Downlight>{value}</Downlight>
            </motion.span>
          )}
        </AnimatePresence>
      );
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
