import { useState } from "react";
import MarkdownViewer from "../components/MarkdownViewer";
import ProjectList from "../components/ProjectList";
import styled from "@emotion/styled";
import ProjectCreateModal from "../components/ProjectCreateModal";
import NavBar from "../components/NavBar";

const Yunn = () => {
  const mdText = '# 안녕하세요'

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCreateProject = () => {
    setIsModalOpen(true)
    console.log('모달창 열림')
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
  }
  return (
    <>
      <NavBar />
      <Btn onClick={handleCreateProject}>버튼</Btn>
      <ProjectCreateModal isOpen={isModalOpen} onClose={handleModalClose} />
      <ProjectList />
      <MarkdownViewer text={mdText} />
    </>
  )
}


const Btn = styled.div`

`

export default Yunn;
