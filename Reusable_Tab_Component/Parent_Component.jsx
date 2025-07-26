import Reusable_tab_component from './Reusable_tab_component'

const tabsData = [
    {
        id: 1,
        title: 'Overview',
        content: 'This tab provides a general overview of the product, its purpose, and how it can help users solve their problems efficiently.',
    },
    {
        id: 2,
        title: 'Features',
        content: 'Explore the powerful features including real-time collaboration, intuitive design, and seamless integration with your favorite tools.',
    },
    {
        id: 3,
        title: 'Pricing',
        content: 'Choose from flexible pricing plans to suit individuals, small teams, and large enterprises. No hidden fees, cancel anytime.',
    },
];

const Parent_Component = () => {

    return (
        <div>
            <Reusable_tab_component tabsData={tabsData}  />
        </div>
    )
}

export default Parent_Component