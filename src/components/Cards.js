import Card from "./Card";


function cards() {
  return (
    <div className="container d-flex justify-content-center h-100 align-items-center ">
        <div className="row">
            <div className="col-md-4">
                <Card/>
            </div>
            <div className="col-md-4">
                <Card/>
            </div>
            <div className="col-md-4">
                <Card/>
            </div>
            
            
        </div>
        
    </div>
    
  )
}
export default cards