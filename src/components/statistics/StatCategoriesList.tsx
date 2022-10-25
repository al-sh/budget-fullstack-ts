import { Tree } from 'antd';
import styled from 'styled-components';
import { ICategoryStatItem } from '../../server/entity/Category';
import { formatMoney, formatPercent } from '../../utils/format';

const CategoriesListWrapper = styled.div`
  margin-bottom: 1em;

  .ant-tree .ant-tree-node-content-wrapper {
    cursor: default;
  }
`;

const StatTreeItem = styled.div``;

const CategoryName = styled.span<{ active: boolean }>`
  display: inline-block;
  width: 150px;
  color: ${({ theme, active }) => (active ? theme.text.primary : theme.text.inactive)};
`;

const Amount = styled.span`
  margin-left: 10px;
  color: green;
`;

export const StatCategoriesList: React.VFC<{ categoriesTree: ICategoryStatItem[] }> = ({ categoriesTree }) => {
  return (
    <>
      <CategoriesListWrapper>
        <Tree
          treeData={categoriesTree}
          selectable={false}
          titleRender={(item) => (
            <StatTreeItem>
              <CategoryName active={!!item.isActive}>{item.title}</CategoryName>
              <Amount>
                {formatMoney(item.totalAmount)} RUB ({formatPercent(item.share)}%)
              </Amount>
            </StatTreeItem>
          )}
        />
      </CategoriesListWrapper>
    </>
  );
};