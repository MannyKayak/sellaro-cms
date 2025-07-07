import { RichText as RichTextRenderer } from '@payloadcms/richtext-lexical/react'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

type Props = {
  data: SerializedEditorState
}

export function RichText({ data }: Props) {
  return <RichTextRenderer data={data} />
}
