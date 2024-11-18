import styled from '@emotion/styled'
import MDEditor from '@uiw/react-md-editor'
import React from 'react'
interface MdEditorDesignProps {
    height?: number
}

interface MdEditorContentProps {
  value: string
  onChange: (newValue: string | undefined, event?: React.ChangeEvent<HTMLTextAreaElement>) => void
}

type MdEditorProps = MdEditorDesignProps & MdEditorContentProps

const MarkdownEditor: React.FC<MdEditorProps> = ({ height, value, onChange }: MdEditorProps) => {


  return (
    <RetroEditorWrapper>
        <MDEditor height={height || 500} value={value} onChange={onChange} />
    </RetroEditorWrapper>
  )
}

const RetroEditorWrapper = styled.div<MdEditorDesignProps>`
	margin: 1rem;
  width: 100%;
  overflow-y: auto;
  margin: 4rem 0;
`

export default MarkdownEditor