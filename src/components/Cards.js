import Card from "./Card";


function cards() {
  return (
    <div className="container d-fex justify-content-center h-100">
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