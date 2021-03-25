import Container from '@material-ui/core/Container';

const TagComponent = ({data}) => {
       
    return(
        <>
            {typeof(data) !== 'undefined' ? (
                data.map((tag, index)=> (<div key={index} ><span >{tag.name}</span></div>))
            ): (
                <span>Not have</span>
            )}
            {/* {JSON.stringify(data)} */}
        </>
    );
}

const ContentBlock = ({item}) => {
    return(
            <>
                {/* {item.image && 
                <PageHeader image={axios.defaults.baseURL+props.rawData.image} />
                } */}
                <h1>{item.title}</h1>
                {/* {JSON.stringify(item.tags)} */}
                <TagComponent data={item.tags}/><br/>
                <span>
                        { new Date(item.updated_at).toLocaleString('default', {month:'short'})} &nbsp;
                        { new Date(item.updated_at).getDate()}
                </span>
                <h3>{item.subtitle}</h3>
                {/* <h4>{ new Date(item.updated_at).toLocaleDateString()}</h4> */}
                <div dangerouslySetInnerHTML={{__html:item.content}}></div>
            </>
        );          

}

const PostDetail = ({item}) => {

    return(
        <>
                <Container maxWidth="lg">

                    {/* {JSON.stringify(item)} */}
                    <main>
                        <ContentBlock item={item} />
                    </main>
                </Container>
          </>
    );
}

export default PostDetail;