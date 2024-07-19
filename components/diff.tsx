"use client";
import * as diff from "diff";
import { AnimatePresence, motion } from "framer-motion";
import { Downlight } from "./ui/downlight";
import { Highlight } from "./ui/highlight";

const Diff = ({
  string1 = "",
  string2 = "",
  showErrors = true,
  mode = "words",
  classname,
}: {
  string1: string;
  string2: string;
  showErrors: boolean;
  mode: string;
  classname?: string;
}) => {
  let groups = diff.diffWords(string1, string2);
  if (mode === "chars") groups = diff.diffChars(string1, string2);

  const mappedNodes = groups.map((group, idx) => {
    const { value, added, removed } = group;
    if (added && showErrors)
      return (
        <AnimatePresence key={idx} initial={false}>
          {showErrors && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: "easeIn" }}
              layout
            >
              <Highlight>{value}</Highlight>
            </motion.span>
          )}
        </AnimatePresence>
      );
    if (removed)
      return (
        <AnimatePresence key={idx} initial={false}>
          {showErrors && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: "easeIn" }}
              layout
            >
              <Downlight>{value}</Downlight>
            </motion.span>
          )}
        </AnimatePresence>
      );
    return <span key={idx}>{value}</span>;
  });

  return <span className={classname}>{mappedNodes}</span>;
};

export default Diff;
