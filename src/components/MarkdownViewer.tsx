import styled from '@emotion/styled'
import MDEditor from '@uiw/react-md-editor'
import React from 'react'

interface MdViewerProps {
  text: string
}

const MarkdownViewer: React.FC<MdViewerProps> = ({text}) => {

  return (
    <MdViewer>
        <MDEditor.Markdown source={text} />
    </MdViewer>
)}

const MdViewer = styled.div`
  padding: 20px;
`

export default MarkdownViewer