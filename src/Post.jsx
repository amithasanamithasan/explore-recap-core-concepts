export default function Post({post}){

const{id,title,body}=post;

return(
    <div className="box">
        <h2>userId:{id}</h2>
        <h3 className="box">title:{title}</h3>

        <h3 className="box">body:{body}</h3>
    </div>
)

}