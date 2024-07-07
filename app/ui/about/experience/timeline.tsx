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
        title: 'Demonstrator',
        place: 'Queen Mary University of London',
        imagePath: '/path/to/image1.jpg',
        description: 'I support students in their learning, provide feedback, assess and mark their exam scripts, projects and courseworks',
        dates: 'January 2020 - March 2021',
        button: false,
    },
    {
        title: 'Student Ambassador',
        place: 'Queen Mary University of London',
        imagePath: '/path/to/image2.jpg',
        description: 'Assist in hosting and running university events such as Open Days, guide attendees on campus tours safely and informatively, answer questions and provide information about the course',
        dates: 'April 2021 - Present',
        button: false,
    },
    {
        title: 'Freelance Social Media Manager, Tutor, Develop, Ambassador',
        place: 'MyPocketSkill',
        imagePath: '/path/to/image2.jpg',
        description: '',
        dates: 'April 2021 - Present',
        button: true,
    },
    {
        title: 'Front-end Software Engineer Intern',
        place: 'eFitter',
        imagePath: '/path/to/image2.jpg',
        description: 'a',
        dates: 'April 2021 - Present',
        button: true,
    },
    {
        title: 'Young Creative',
        place: 'Fight For Peace',
        imagePath: '/path/to/image2.jpg',
        description: '',
        dates: 'February 2023 - Present',
        button: true,
    },
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
