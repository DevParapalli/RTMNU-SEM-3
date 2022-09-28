#include <dirent.h>
#include <limits.h>
#include <stdio.h>
#include <unistd.h>

int main(void) {
    char cwd[PATH_MAX];
    getcwd(cwd, sizeof(cwd));
    if (cwd != NULL)
        printf("Current working dir: %s\n", cwd);
    printf("Contents of CWD:\n");
    DIR *d;
    struct dirent *dir;
    d = opendir(".");
    if (d) {
        while ((dir = readdir(d)) != NULL) {
            printf("%s\n", dir->d_name);
        }
        closedir(d);
    }
    return (0);
}