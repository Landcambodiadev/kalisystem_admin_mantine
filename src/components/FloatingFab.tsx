import { ActionIcon } from '@mantine/core';
import { IconZap } from '@tabler/icons-react';

interface FloatingFabProps {
  onClick: () => void;
}

export const FloatingFab = ({ onClick }: FloatingFabProps) => {
  return (
    <ActionIcon
      size="xl"
      radius="xl"
      variant="filled"
      color="blue"
      onClick={onClick}
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '24px',
        zIndex: 1000,
        width: '56px',
        height: '56px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      }}
    >
      <IconZap size={24} />
    </ActionIcon>
  );
};