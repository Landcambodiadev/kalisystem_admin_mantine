import { useState } from 'react';
import { MantineProvider, Container, Title, Tabs } from '@mantine/core';
import { FloatingFab } from './components/FloatingFab';
import Example from './TS';
import CrudExampleWithProviders from './CrudExample';

function App() {
  const [activeTab, setActiveTab] = useState<string | null>('existing');

  const handleFabClick = () => {
    // Toggle between tabs or perform other actions
    setActiveTab(activeTab === 'existing' ? 'crud' : 'existing');
  };

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Container size="xl" py="md">
        <Title order={1} mb="lg" align="center">
          Mantine React Table Examples
        </Title>
        
        <Tabs value={activeTab} onTabChange={setActiveTab}>
          <Tabs.List>
            <Tabs.Tab value="existing">Existing Table</Tabs.Tab>
            <Tabs.Tab value="crud">CRUD Table</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="existing" pt="md">
            <Example />
          </Tabs.Panel>

          <Tabs.Panel value="crud" pt="md">
            <CrudExampleWithProviders />
          </Tabs.Panel>
        </Tabs>

        <FloatingFab onClick={handleFabClick} />
      </Container>
    </MantineProvider>
  );
}

export default App;