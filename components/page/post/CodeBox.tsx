import { FC } from "react";
import Refractor from "react-refractor";
import json from "refractor/lang/json";
import docker from "refractor/lang/docker";
import bash from "refractor/lang/bash";
import yaml from "refractor/lang/yaml";

interface PostCodeBoxProps {
  language?: string;
  code?: string;
}

Refractor.registerLanguage(json);
Refractor.registerLanguage(docker);
Refractor.registerLanguage(bash);
Refractor.registerLanguage(yaml);

const PostCodeBox: FC<PostCodeBoxProps> = (props) => {
  const { language = "javascript", code = "" } = props;
  return <Refractor language={language} value={code} />;
};
export default PostCodeBox;
