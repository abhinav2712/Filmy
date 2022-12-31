import Thumbnail from "./Thumbnail"
import FlipMove from "react-flip-move";

function Results({result}) {
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-3 xl:grids-cols-4
    3xl-flex flex-wrap justify-center">
{result.map((result)=>(  
    <Thumbnail key={result.id} result={result}/>
))}
    </FlipMove>
  )
}

export default Results;