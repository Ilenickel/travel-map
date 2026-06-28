import { createContext, useContext, useCallback } from 'react';
import { checkBadgeUpgrades } from '../utils/checkBadgeUpgrades';

const BadgeContext = createContext({ triggerCheck: async () => [] });

export function BadgeProvider({ children, onUpgrades }) {
  const triggerCheck = useCallback(async (userId) => {
    const upgrades = await checkBadgeUpgrades(userId);
    if (upgrades.length > 0) onUpgrades(upgrades);
    return upgrades;
  }, [onUpgrades]);

  return (
    <BadgeContext.Provider value={{ triggerCheck }}>
      {children}
    </BadgeContext.Provider>
  );
}

export function useBadge() {
  return useContext(BadgeContext);
}
