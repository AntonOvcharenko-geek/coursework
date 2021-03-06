import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {faUniversity} from "@fortawesome/free-solid-svg-icons/faUniversity";
import './Title.css'



class Title extends Component {
    render() {

        return (
            <div className={'title-wrap'}>
                <div  className={'title'}>
                    <div className={'title-part'}>
                        Курсова робота студента 3-В групи
                    </div>
                    <div className={'title-part'}>
                        Овчаренка Антона Сергійовича
                    </div>
                    <div className={'title-part'}>
                        <a className={'title-links'} href={'mailto:ovcharenko.anton2@gmail.com'}>
                            ovcharenko.anton2@gmail.com
                        </a>
                    </div>
                    <div className={'title-social'}>
                        <div className={'title-part'}>
                            <a className={'title-links__social'} href={'http://cdu.edu.ua/'}>
                                cdu.edu.ua
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Title;