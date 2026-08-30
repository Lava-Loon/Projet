public class personne {
    String nom;
    int age;

    public personne(String nom, int age) {
        this.age = age;
        this.nom = nom;
    }

    public void presentation() {
        System.out.println("Hello, my name is " + nom + " and I'm " + age );
    }
}
