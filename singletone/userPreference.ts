export class UserPreference {
  private static uniqueInstance: UserPreference;
  public color: string;

  private constructor() {
    this.color = '';
  }

  public static getInstance(): UserPreference {
    if (!UserPreference.uniqueInstance) {
      UserPreference.uniqueInstance = new UserPreference();
    }

    return UserPreference.uniqueInstance;
  }
}
