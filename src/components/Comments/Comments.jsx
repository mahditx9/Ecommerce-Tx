import { styles } from "../../styles";
import Comment from "./Comment";
function Comments() {
  return (
    <div className={`${styles.singleCard} ${styles.flexCenter} gap-4 flex-col`}>
      <Comment userName="Sara" comment="nice too meet you" />
      <Comment userName="Sara" comment="nice too meet you" />
      <Comment userName="Sara" comment="nice too meet you" />
    </div>
  );
}

export default Comments;
