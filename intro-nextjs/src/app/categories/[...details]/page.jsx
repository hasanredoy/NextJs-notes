const CategoriesDetailsPage = ({params}) => {
  // console.log(params);
  if(params.details.length==1){
    return<div>
      11111111
    </div>
  }
  if(params.details.length==2){
    return<div>
      2222222222
    </div>
  }
  return (
    <div>
      CategoriesDetailsPage
    </div>
  );
};

export default CategoriesDetailsPage;