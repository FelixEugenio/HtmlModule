

export const PostCard = ({tittle,cover,body,id}) =>(
        <div className="post">
            <img src={cover}  alt={tittle} />
          <div  className="post-content">
            <h1>{tittle}</h1>
            <p>{body}</p>
          </div>
          </div>
    )
