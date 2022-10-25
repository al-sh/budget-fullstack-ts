import { Tabs } from 'antd';
import React, { useState } from 'react';
import { GetStatTreeFormParams, useStatistics } from '../../hooks/useStatistics';
import { ETRANSACTION_TYPE } from '../../server/types/transactions';
import { FilterButton } from '../_shared/buttons/FilterButton';
import { Loader } from '../_shared/Loader';
import { StatCategoriesList } from './StatCategoriesList';
import { StatFilters } from './StatFilters';

export const StatisticsPage: React.VFC = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [filterParams, setFilterParams] = useState<GetStatTreeFormParams>({ typeId: ETRANSACTION_TYPE.EXPENSE, showHidden: false });

  const { useGetTree } = useStatistics();

  const { isLoading, isError, data: categoriesTree } = useGetTree(filterParams);

  if (isLoading) return <Loader />;
  if (isError) return <>Error</>;

  return (
    <>
      <h2>Статистика по категориям</h2>
      <FilterButton
        onClick={() => {
          setShowFilters(!showFilters);
        }}
        showFilters={showFilters}
      />
      {showFilters && (
        <StatFilters
          params={filterParams}
          onClear={() => {
            setShowFilters(false);
            setFilterParams({ ...{} });
          }}
          onFinish={(params) => {
            setShowFilters(false);
            setFilterParams({ ...filterParams, ...params });
          }}
        />
      )}
      <Tabs
        activeKey={String(filterParams.typeId)}
        onChange={(activeKey) => {
          setFilterParams({ ...filterParams, typeId: parseInt(activeKey) });
        }}
      >
        <Tabs.TabPane tab="Расходы" key={String(ETRANSACTION_TYPE.EXPENSE)} />
        <Tabs.TabPane tab="Доходы" key={String(ETRANSACTION_TYPE.INCOME)} />
      </Tabs>
      {categoriesTree && <StatCategoriesList categoriesTree={categoriesTree} />}
    </>
  );
};

export default StatisticsPage;