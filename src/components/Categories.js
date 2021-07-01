import React from 'react';
import ReactRoutes from '../config/ReactRoutes';

function Categories() {
    return (
        <div className="article-list">
        <div className="container">
            <div className="intro">
                <h2 className="text-center">Proizvodi</h2>
                <p className="text-center">Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae. </p>
            </div>
            <div className="row articles">
                <div className="col-sm-6 col-md-4 item"><a href={ReactRoutes.FRUITSVEGGIES}><img className="img-fluid" src="assets/img/categories/fruitsVegetables.jpg" alt="FruitsVeggies"/></a>
                    <h3 className="name">Voce i povrce</h3>
                    <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, interdum justo suscipit id.</p>
                    <a className="action" href={ReactRoutes.FRUITSVEGGIES}><i className="fa fa-arrow-circle-right"></i></a></div>
                <div
                    className="col-sm-6 col-md-4 item"><a href={ReactRoutes.MEATS}><img className="img-fluid" src="assets/img/categories/meat.jpg" alt="Meats"/></a>
                    <h3 className="name">Mesni proizvodi</h3>
                    <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, interdum justo suscipit id.</p>
                    <a className="action" href={ReactRoutes.MEATS}><i className="fa fa-arrow-circle-right"></i></a></div>
            <div
                className="col-sm-6 col-md-4 item"><a href={ReactRoutes.DRINKS}><img className="img-fluid" src="assets/img/categories/drinks.jpg" alt="Drinks"/></a>
                <h3 className="name">Pice</h3>
                <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, interdum justo suscipit id.</p>
                <a className="action" href={ReactRoutes.DRINKS}><i className="fa fa-arrow-circle-right"></i></a></div>
            </div>
        </div>
    </div>
    )
}

export default Categories;