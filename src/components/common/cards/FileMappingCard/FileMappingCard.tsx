import React from 'react';
import { Image, Card, CardContent, CardHeader, CardMeta, CardDescription } from 'semantic-ui-react';
import { IFileMapping } from '../../../../models/FileMapping';
import logo from '../../../../assets/nimbusLogo.png';
import './FileMappingCard.css';

interface IFileMappingCardProps {
    item: IFileMapping;
}

export const FileMappingCard: React.FC<IFileMappingCardProps> = ({ item }) => {
    return (
        <Card>
            <Image className='file-mapping-card-image' src={logo} wrapped ui={false} />
            <CardContent>
                <CardHeader>{item.fileName}</CardHeader>
                <CardMeta>
                    <span className='date'>Dataset: {item.datasetId}</span>
                </CardMeta>
                <CardMeta>
                    <span className='date'>Last access: {item.lastAccess.toLocaleDateString()}</span>
                </CardMeta>
                <CardDescription>
                    {item.columnCount} Mapped Columns
                </CardDescription>
            </CardContent>
        </Card>
    );
};