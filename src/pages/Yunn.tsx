import MarkdownViewer from "../components/MarkdownViewer";
import ProjectList from "../components/ProjectList";

const Yunn = () => {
  const mdText = '# 안녕하세요'
  return (
    <>
      <ProjectList />
      <MarkdownViewer text={mdText} />
    </>
  )
}

export default Yunn;
