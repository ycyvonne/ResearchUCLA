import React, { Component } from 'react';
import ResearchGroupCardList from '../../components/ResearchGroupCardList/ResearchGroupCardList'
import './style.scss';
import Page from '../../components/Page/Page'

class ResearchPage extends Component {
    render() {
        return (
            <Page>
                <ResearchGroupCardList />
            </Page>
        );
    }
}

export default ResearchPage;