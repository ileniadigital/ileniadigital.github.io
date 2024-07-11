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
import { link } from 'fs';

const details = [
    {
        title: 'Content Manager (Volunteer)',
        place: 'Byte Queens',
        imagePath: 'bytequeens.png',
        description: 'I create and manage the content for the Byte Queens social media channels and newsletters',
        dates: 'June 2024 - Present',
        button: true,
        link: '/projects/content/bytequeens',
    },
    {
        title: 'Demonstrator',
        place: 'Queen Mary University of London',
        imagePath: 'qmul.jpeg',
        description: 'I support students in their learning, provide feedback, assess and mark their exam scripts, projects and coursework.',
        dates: 'January 2020 - Present',
        button: false,
        link: '',
    },
    {
        title: 'Student Ambassador',
        place: 'Queen Mary University of London',
        imagePath: 'qmul.jpeg',
        description: 'Assist in hosting and running university events such as Open Days, guide attendees on campus tours safely and informatively, answer questions and provide information about the course and student experience.',
        dates: 'March 2023 - Present',
        button: false,
        link: '',
    },
    {
        title: 'Freelance Social Media Manager, Tutor, Develop, Ambassador',
        place: 'MyPocketSkill',
        imagePath: 'mps.jpg',
        description: "Develop personalised strategies for my clients' social media and websites. Prepare and teach programming lessons adapted to students' abilities and interests.",
        dates: 'April 2023 - Present',
        button: true,
        link: '/projects/content/socialmedia',
    },
    {
        title: 'Front-end Software Engineer Intern',
        place: 'eFitter',
        imagePath: 'efitter.jpeg',
        description: 'Design and develop the front-end of the eFitter customer dashboard, using Next.js and import data from the back-end using Django.',
        dates: 'March 2024 - April 2024',
        button: true,
        link: '/projects/programming/efitter',
    },
    {
        title: 'Young Creative',
        place: 'Fight For Peace',
        imagePath: 'ffp.png',
        description: 'Create and promote content for the Fight For Peace social media channels, support and host interviews for content days. Design the Women in Sport campaign.',
        dates: 'February 2023 - Present',
        button: true,
        link: '/projects/content/fightforpeace',
    },
    {
        title: 'Coding Teacher, Curriculum Assistant and Camp Leader',
        place: 'CYPHER Coders ',
        imagePath: 'cypher.jpeg',
        description: 'Manage classrooms, summer camps and after-school clubs, teach programming to children aged 5-11 in languages such as Scratch, Python, JavaScript, Minecraft Education and Robotics.',
        dates: 'Novemeber 2022 - August 2023',
        button: false,
        link: '',
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
