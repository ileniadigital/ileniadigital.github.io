//Imported from https://mui.com/material-ui/react-timeline/
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

// Import ui elements
import Work from './work';

const details = [
    {
        title: 'Work 1',
        imagePath: '/path/to/image1.jpg',
        description: 'Description 1',
        dates: 'January 2020 - March 2021'
    },
    {
        title: 'Work 2',
        imagePath: '/path/to/image2.jpg',
        description: 'Description 2',
        dates: 'April 2021 - Present'
    },
    {
        title: 'Work 3',
        imagePath: '/path/to/image2.jpg',
        description: 'Description 2',
        dates: 'April 2021 - Present'
    },
    // Add more work experiences here
];

export default function AlternateReverseTimeline() {
    return (
        <Timeline position="alternate-reverse">
            {details.map((detail, index) => (
                <TimelineItem key={index}>
                    <TimelineSeparator>
                        <TimelineDot />
                        {index !== details.length - 1 && <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent>
                        <Work details={[detail]} />
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    );
}
