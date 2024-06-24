import React from 'react'

function DescriptionRenderer(data) {
    const { title, stacks, description } = data;
    const stacksList = stacks.split(",");
    const FormattedTitle = title.replace(/_/g, ' ');

    return (
        <>
            <div className='DescriptionJobTitle'>
                {FormattedTitle}
                {data.git ? <div className='DescriptionLink'>Git : <a href={data.git} >Link</a></div> : null}
                {data.link ? <div className='DescriptionLink'>Website : <a href={data.link} >Link</a></div> : null}
            </div>

            <div>
                {stacksList.length > 1 ? "Stacks :" : "Stack :"}
                <div className='stacks'>
                    {stacksList.map((stack, key) => {
                        return (
                            <div key={key }>
                                <img src={`/${stack}.png`} alt={stack}/>
                                {stack}
                            </div>)
                    })}
                </div>
            </div>

            <div>
                ⇨ {description}
            </div>

        </>
    )
}

export default DescriptionRenderer