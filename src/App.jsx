import Section1 from './components/section1/section1'

const App = () => {

    const users = [
        {
            img: 'https://images.unsplash.com/photo-1680459575585-390ed5cfcae0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
            intro: 'Customers who actively use digital banking services and seek seamless financial experiences.',
            tag: 'Satisfied'
        },
        {
            img: 'https://plus.unsplash.com/premium_photo-1661768380995-f459ff60add6?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
            intro: 'Individuals with limited access to banking products who need affordable financial solutions.',
            tag: 'Underserved'
        },
        {
            img: 'https://plus.unsplash.com/premium_photo-1674055047975-70b79b84d871?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
            intro: 'Users who rarely engage with banking platforms and require simple guided financial tools.',
            tag: 'Underbanked'
        }
    ]
    return(
        <div>
            <Section1 users={users} />
        </div>
    )
}

export default App