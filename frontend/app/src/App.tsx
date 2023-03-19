import React from 'react';
import './App.css';

import { useCategoriesQuery } from './hooks/useCategoriesQuery';
// import { CategoriesQuery } from './hooks/__generated__/CategoriesQuery'


function App() {
  const { data, loading, error } = useCategoriesQuery();

  // const Categories = (data: any, loading: boolean) => {
  //   const parseData = (data: CategoriesQuery | undefined) => {
  //     const {__typename, ...other} = data?.categories
  //     return data?.categories?.map((c)=> ({...other}));
  //   }

  //   if(loading) return <p>Loading...</p>;
  //   return (
  //     <>
  //       {parseData(data)?.map((category, index: number) => {
  //         <div>
  //           <h4 key={index}>{category.name}</h4>
  //         </div>
  //       })
  //       }
  //     </>
  //   )
  // };
  if(loading) return <p>Loading...</p>;
  if(error) return <p>Error...</p>;
  console.log(data)

  return (
    <>
    {data!.categories!.map(
      (category, index) => (
        <div key={index}>
          <h4>{category.name}</h4>
        </div>
      )
    )
    }
    </>
  )
}

export default App;
