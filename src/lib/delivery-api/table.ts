export type TableContent = {
  fieldtype: 'table';
  thead: TableHeadContent[];
  tbody: TableRowContent[];
};
export type TableHeadContent = {
  component: '_table_head';
  value: string | undefined;
};
export type TableRowContent = {
  component: '_table_row';
  body: TableColumnContent[];
};
export type TableColumnContent = {
  component: '_table_col';
  value: string | undefined;
}