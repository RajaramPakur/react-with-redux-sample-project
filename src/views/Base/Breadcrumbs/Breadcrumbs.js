import React from 'react'

const Breadcrumbs = (props) => {
    let menuList;
    menuList = props.menuLists.map((menu, index) => {
        return (<li key={index}>{menu}</li>)
    })
    return (
        <div className="row">
            <div className="col">
                <ul className="breadcrumbs flex align-items-center">
                    {menuList}
                </ul>
            </div>
        </div>
    )
}

export default Breadcrumbs
