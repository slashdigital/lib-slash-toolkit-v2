import AuthFactory from '../../../src/modules/auth/index';
import AbstractAuthStrategy from '../../../src/modules/auth/strategy/abstract';
import MemoryStore from '../../../src/shared/stores/memoryStore';
import AbstractStore from '../../../src/shared/stores/store';

describe('should test modules/auth', () => {
  describe('should test auth local strategy', () => {
    test('should load local strategy', () => {
      const authStrategy: AbstractAuthStrategy = AuthFactory.createLocalAuth();

      expect(authStrategy.toString()).toEqual('AuthLocalStrategy');
    });
    /**
     * Set the session store configuration with login
     */
    test('should set config for local strategy', () => {
      const authStrategy: AbstractAuthStrategy = AuthFactory.createLocalAuth();
      const store: AbstractStore<string, string> = new MemoryStore<string, string>();
      authStrategy.configStore(store); // Session store
      expect(authStrategy.getStore() instanceof MemoryStore).toEqual(true);
    });
     /**
     * Login with username and/or userId
     * To set the session to store
     * Create user token
     * Validate the token with validateToken
     * And check store existed with it or not.
     */
    test('should set login with local strategy', async () => {
      const authStrategy: AbstractAuthStrategy = AuthFactory.createLocalAuth();
      const token = await authStrategy.loginAs('username', 'userId');
      expect(typeof token).toEqual(String);
      expect(authStrategy.validateToken(token)).toEqual(true);
      expect(authStrategy.getToken()).toEqual(token);
      expect(authStrategy.getStore().get(authStrategy.enum?.USERNAME)).toEqual('username');
    });
    /**
     * Logout with token
     * To clear from the session to store
     * Clear the token
     */
    test('should set logout with token with local strategy', async () => {
      const authStrategy: AbstractAuthStrategy = AuthFactory.createLocalAuth();
      const token = await authStrategy.loginAs('username', 'userId');
      await authStrategy.logout(token);
      expect(authStrategy.getToken()).toEqual(undefined);
      expect(authStrategy.isLoggedIn()).toEqual(false);
    });
  });
});
