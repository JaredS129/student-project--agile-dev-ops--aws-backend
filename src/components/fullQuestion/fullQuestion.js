const fullQuestion = (props) => {


    return(
        <>
        <h2>{props.title}</h2>
        <p>Topic:{props.topic}</p>
        <h3>What have you worked on?</h3>
        <p>{props.workOn}</p>
        <h3>What are you trying to achieve?</h3>
        <p>{props.tryAchieve}</p>
        <h3>What is the issue you are having?</h3>
        <p>{props.issue}</p>
        <h3>What have you attempted?</h3>
        <p>{props.attempted}</p>
        
        </>
    )
}