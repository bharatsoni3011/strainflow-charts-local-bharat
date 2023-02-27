import html from '../../dist/exBERT.html'
import './ExBERT.css'
import {Helmet} from "react-helmet";

export function ExBERT() {
    return (
        <>
            <div style={{minWidth:'100%',outerHeight:'200%'}} className={'ExBERT'} dangerouslySetInnerHTML={{__html:html}}>
            </div>
            <Helmet>
                <script src="../../dist/main.js"></script>
                <script src="../../dist/vendor.js"></script>
            </Helmet>
        </>
    )
}