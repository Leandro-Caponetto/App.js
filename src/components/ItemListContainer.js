const Main = (props) => {
    


    return (
        <main>

            <>
                <div className="name">
                    <h2>Leandro Caponetto</h2>
                    {props.children}
                </div>
                
            </>
            
            
        </main>
    )
}

export default Main