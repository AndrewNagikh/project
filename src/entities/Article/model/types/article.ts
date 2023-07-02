export enum BlockType {
    TEXT = 'TEXT',
    IMAGE = 'IMAGE',
    CODE = 'CODE',
}

export interface BlockBase {
    id: string;
    type: BlockType;
}

export interface TextBlock extends BlockBase {
    type: BlockType.TEXT;
    title?: string;
    paragraphs: Array<string>;
}

export interface ImageBlock extends BlockBase {
    type: BlockType.IMAGE;
    src: string;
    title: string;
}

export interface CodeBlock extends BlockBase {
    type: BlockType.CODE;
    code: string;
}

export type Block = CodeBlock | TextBlock | ImageBlock;

export enum ArticleType {
    IT = 'IT',
    NEWS = 'News',
}

export interface Article {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    wievs: number;
    createdAt: string;
    type: Array<string>;
    blocks: Array<Block>;
}
