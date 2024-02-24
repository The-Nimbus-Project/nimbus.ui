import React from 'react';
import { Divider } from 'semantic-ui-react';
import { Dataset } from '../../models/Dataset';
import { DatasetCard } from '../../components/common/cards/DatasetCard/DatasetCard';
import './HomePage.css';
import { LoadAutomation } from '../../models/LoadAutomation';
import { LoadAutomationCard } from '../../components/common/cards/LoadAutomationCard/LoadAutomationCard';
import { FileMapping } from '../../models/FileMapping';
import { FileMappingCard } from '../../components/common/cards/FileMappingCard/FileMappingCard';
import { CardSection } from '../../components/common/sections/CardSection/CardSection';

const HomePage: React.FC = () => {
	//later to be an api call mapped to a dataset model
	const datasets: Dataset[] = [
		{ id: 1, name: "Dataset 1", lastAccess: new Date('08/24/2023'), totalRecords: 215015 },
		{ id: 1, name: "Dataset 1", lastAccess: new Date('08/24/2023'), totalRecords: 215015 },
		{ id: 2, name: "Dataset 2", lastAccess: new Date('11/29/2023'), totalRecords: 57215 },
		{ id: 3, name: "Dataset 3", lastAccess: new Date("01/15/2024"), totalRecords: 2150 },
		{ id: 4, name: "Dataset 4", lastAccess: new Date("02/16/2024"), totalRecords: 215 },
		{ id: 5, name: "Dataset 5", lastAccess: new Date("02/21/2024"), totalRecords: 5215 },
		{ id: 6, name: "Dataset 6", lastAccess: new Date("02/23/2024"), totalRecords: 1300215 }
	];

	const loadAutomations: LoadAutomation[] = [
		{ id: 1, name: 'Dataset 1 Load', lastAccess: new Date('08/24/2023'), totalLoads: 113, lastLoadDate: new Date("02/20/2024"), fileRegexPattern: ''},
		{ id: 2, name: 'Dataset 2 Load', lastAccess: new Date('02/20/2024'), totalLoads: 12, lastLoadDate: new Date("02/19/2024"), fileRegexPattern: ''},
		{ id: 3, name: 'Dataset 3 Load', lastAccess: new Date('01/02/2024'), totalLoads: 3, lastLoadDate: new Date("02/18/2024"), fileRegexPattern: ''},
		{ id: 4, name: 'Dataset 4 Load', lastAccess: new Date('02/23/2024'), totalLoads: 215, lastLoadDate: new Date("02/21/2024"), fileRegexPattern: ''},
	];

	const fileMappings: FileMapping[] = [
		{ id: 1, fileName: 'Weekly Dataset 1 File', lastAccess: new Date('08/24/2023'), columnCount: 57, fileType: 'text', delimiter: '~', datasetId: 1},
		{ id: 2, fileName: 'Daily Dataset 1 File', lastAccess: new Date('08/26/2023'), columnCount: 57, fileType: 'text', delimiter: '|', datasetId: 1},
		{ id: 3, fileName: 'Monthly Dataset 1 File', lastAccess: new Date('08/25/2023'), columnCount: 57, fileType: 'text', delimiter: '|', datasetId: 1},
		{ id: 4, fileName: 'Dataset 2 File', lastAccess: new Date('10/24/2023'), columnCount: 26, fileType: 'text', delimiter: '~', datasetId: 2},
		{ id: 5, fileName: 'Dataset 2 File 2', lastAccess: new Date('10/24/2023'), columnCount: 34, fileType: 'text', delimiter: '|', datasetId: 2},
		{ id: 6, fileName: 'Weekly Dataset 3 File', lastAccess: new Date('12/19/2023'), columnCount: 135, fileType: 'text', delimiter: '|', datasetId: 3},
		{ id: 7, fileName: 'Weekly Dataset 3 File 2', lastAccess: new Date('01/03/2024'), columnCount: 148, fileType: 'text', delimiter: '~', datasetId: 3},
		{ id: 8, fileName: 'Daily Dataset 4 File', lastAccess: new Date('02/20/2024'), columnCount: 18, fileType: 'text', delimiter: '|', datasetId: 4},
	];

	return (
		<div className='homepage-container'>
			<CardSection<Dataset> items={datasets} Component={DatasetCard} sectionTitle='Datasets' sectionIcon='cloud' />
			<Divider />
			<CardSection<LoadAutomation> items={loadAutomations} Component={LoadAutomationCard} sectionTitle='Load Automations' sectionIcon='cloudversify' />
			<Divider />
			<CardSection<FileMapping> items={fileMappings} Component={FileMappingCard} sectionTitle='File Mappings' sectionIcon='file code outline' />
		</div>
	);
};

export default HomePage;