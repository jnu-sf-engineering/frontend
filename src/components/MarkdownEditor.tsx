import styled from '@emotion/styled'
import MDEditor from '@uiw/react-md-editor'
import React, { useState } from 'react'

interface MdEditorProps {
    height?: number
}

const MarkdownEditor: React.FC<MdEditorProps> = ({ height }) => {
    const [value, setValue] = useState('')

    const handleMdChange = (newValue: string | undefined) => {
        setValue(newValue || '')
    }

  return (
    <RetroEditorWrapper>
        <MDEditor height={height || 500} value={value} onChange={handleMdChange} />
    </RetroEditorWrapper>
  )
}

const RetroEditorWrapper = styled.div<MdEditorProps>`
	margin: 1rem;
`

export default MarkdownEditor