import axios from "axios";

class GitHubApiService {
  async getUser(username) {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    return response.data;
  }
  ["fetchUserData"];

  async getRepositories(username) {
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );
    return response.data;
  }
}

export default GitHubApiService;
