import React, {Component} from 'react'
import axios from 'axios';
import Loader from "../controls/Loader";


class ProductDetailedContainer extends Component {

    constructor() {
        super();
        this.state = {
            technologies: [],
            activeSurfaceID: 0,
            activeTechnologyID: 0,
            activeMaterialID: 0,
            showLoader: false
        }
    }

    componentDidMount() {
        this.setState({showLoader: true}, () => {
            axios.get('/order/technology/list/')
                .then(response => {
                    this.setState({
                        technologies: response.data,
                        activeSurfaceID: response.data[0].material[0].surface[0].id,
                        activeMaterialID: response.data[0].material[0].id,
                        activeTechnologyID: response.data[0].id,
                        showLoader: false
                    });
                })
        });
    }

    updateActiveBlock(classname, attr, newId) {
        let technologiesBlocks = document.getElementsByClassName(classname);
        let newTechnologyBlock = null;
        for (let index = 0; index < technologiesBlocks.length; index++) {
            if (technologiesBlocks[index].getAttribute('is-active') === 'true') {
                technologiesBlocks[index].removeAttribute('is-active');
            } else if (Number(technologiesBlocks[index].getAttribute(attr)) === newId) {
                newTechnologyBlock = technologiesBlocks[index];
            }
        }
        newTechnologyBlock.setAttribute('is-active', 'true');
    }

    changeTechnology = (techId) => {
        this.setState({activeTechnologyID: techId});
        this.updateActiveBlock('technology-block', 'tech-id', techId);
    };

    changeMaterial = (materialId) => {
        this.setState({activeMaterialID: materialId});
        this.updateActiveBlock('material-block', 'material-id', materialId);
    };

    changeSurface = (surfaceId) => {
        this.setState({activeSurfaceID: surfaceId});
        this.updateActiveBlock('surface-block', 'surface-id', surfaceId);
    };

    getTechnologies() {
        return this.state.technologies;
    }

    getMaterials() {
        for (let index = 0; index < this.state.technologies.length; index++)
            if (this.state.activeTechnologyID === this.state.technologies[index].id)
                return this.state.technologies[index].material
    }

    getSurface() {
        for (let index = 0; index < this.state.technologies.length; index++)
            if (this.state.activeTechnologyID === this.state.technologies[index].id)
                for (let subIndex = 0; subIndex < this.state.technologies[index].material.length; subIndex++)
                    if (this.state.technologies[index].material[subIndex].id === this.state.activeMaterialID)
                        return this.state.technologies[index].material[subIndex].surface;
    }

    render() {
        let technologiesList = this.getTechnologies();
        let materialsList = this.getMaterials();
        let surfaceList = this.getSurface();

        return (
            <React.Fragment>
                <div className='calculation-container'>
                    <div className="row">
                        <div className='col-lg-12'>
                            <div className='calculation-date'>Calculation from 06.12.20</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className='col-lg-6'>
                            <div className='calculation-image-wrapper'>
                                <img width={132} height={108}
                                     src="https://www.yugtrendavto.ru/_upload/detail_pics/DETAIL/DT0158.jpg" alt="alt"/>
                            </div>
                            <p className='calculation-name'>
                                Adaptor_16092019-FGiiiyt.step
                            </p>
                            <br/>
                            <p className='calculation-size'>
                                28x73x62 mm
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <ul className='calculation-defects'>
                                <li>incorrect holes detected</li>
                                <li>difficult places for manufacturing</li>
                            </ul>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-lg-6">
                            <div className='calculation-technology'>Technology</div>
                        </div>
                        <div className="col-lg-6">
                            <div className='calculation-technology'>Surface finish</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            {technologiesList.map((technology, index) =>
                                <div tech-id={technology.id} is-active={index === 0 ? 'true' : ''} key={index}
                                     className='technology-block' onClick={e => {
                                    e.preventDefault();
                                    this.changeTechnology(technology.id)
                                }}>{technology.name}</div>
                            )}
                        </div>
                        <div className="col-lg-6">
                            {surfaceList ?
                                surfaceList.map((surface, index) =>
                                    <div is-active={index === 0 ? 'true' : ''} key={index}
                                         onClick={e => {
                                             e.preventDefault();
                                             this.changeSurface(surface.id)
                                         }} className='surface-block'
                                         surface-id={surface.id}>{surface.name}</div>
                                ) : null
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className='calculation-material'>Material</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            {materialsList ?
                                materialsList.map((material, index) =>
                                    <div is-active={index === 0 ? 'true' : ''} key={index} onClick={e => {
                                        e.preventDefault();
                                        this.changeMaterial(material.id)
                                    }} className='material-block' material-id={material.id}>{material.name}</div>
                                ) : null}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <label className='file-chooser' htmlFor="upload-top">upload the drawing for specifying
                                threads or increasing
                                tolerances</label>
                            <input type="file" name="photo" id="upload-top" className="upload-photo"/>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                            <span className='calculation-tolerance'>Increased tolerances </span>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                            <span className='calculation-tolerance'>Threads </span>
                        </div>
                        <div className="col-lg-6">
                            <textarea rows="10"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className='calculation-quantity'>Quantity</div>
                            <input type="range"/>
                            <span className='range-value'>1</span>
                        </div>
                        <div className="col-lg-6">
                            <div className='faster-radio'>
                                <label className="switch">
                                    <input type="checkbox"/>
                                    <span className="slider round"></span>
                                </label>
                                <span className='calculation-tolerance'>Faster</span>
                                <span className='business-days'>
                                    <span className='days-count'>5</span>
                                    <span> business days</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-right">
                            <p className='calculation-caption'>
                                The production cost will be between $22 and $54<br/>
                                The final price will be confirmed after checkout.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-right">
                            <p className='calculation-cost'>
                                $25.64
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <label className='file-chooser' full-width="true" htmlFor="upload-bottom">
                            upload another one<br/>
                            drop parts here or select files
                        </label>
                        <input type="file" name="photo" id="upload-bottom" className="upload-photo"/>
                    </div>
                </div>
                <div className="row calculation-buttons">
                    <div className="col-lg-6">
                        <button className='save-calc'>Save calculation</button>
                    </div>
                    <div className="col-lg-6">
                        <button className='order-calc'>Order it</button>
                    </div>
                    <div className="col-lg-12 text-center login-caption">
                        Please login to place your order
                    </div>
                </div>

                <Loader showLoader={this.state.showLoader}/>

            </React.Fragment>
        )
    }
}

export default ProductDetailedContainer;