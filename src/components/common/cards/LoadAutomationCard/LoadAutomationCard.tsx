import React from 'react';
import { Image, Card, CardContent, CardHeader, CardMeta, CardDescription } from 'semantic-ui-react';
import { ILoadAutomation } from '../../../../models/LoadAutomation';
import logo from '../../../../assets/nimbusLogo.png';
import './LoadAutomationCard.css';

interface ILoadAutomationCardProps {
    item: ILoadAutomation;
}

export const LoadAutomationCard: React.FC<ILoadAutomationCardProps> = ({ item }) => {
    return (
        <Card>
            <Image className='load-automation-card-image' src={logo} wrapped ui={false} />
            <CardContent>
                <CardHeader>{item.name}</CardHeader>
                <CardMeta>
                    <span className='date'>Last load date: {item.lastLoadDate.toLocaleDateString()}</span>
                </CardMeta>
                <CardMeta>
                    <span className='date'>Last access: {item.lastAccess.toLocaleDateString()}</span>
                </CardMeta>
                <CardDescription>
                    {item.totalLoads} Total Loads
                </CardDescription>
            </CardContent>
        </Card>
    );
};